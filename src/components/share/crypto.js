// 安装：npm install libsodium-wrappers
import sodium from 'libsodium-wrappers';

const BASE64_KEY = '5J47CXSTQk+RNWNevZPqNg9RLDCHDQhOdLlSyuzNROo=';

// 等待 libsodium 就绪
await sodium.ready;

// 从 Base64 key 构造对称密钥
const KEY = sodium.from_base64(
    BASE64_KEY,
    sodium.base64_variants.ORIGINAL
);

/**
 * 加密
 * @param {string} plainText
 * @returns {{ ciphertext: string, nonce: string, tag: string }}
 */
export function encryptJS(plainText) {
    // 1. 文本转 Uint8Array
    const messageBuf = sodium.from_string(plainText);
    // 2. 随机 12 字节 nonce
    const nonce = sodium.randombytes_buf(sodium.crypto_aead_chacha20poly1305_ietf_NPUBBYTES);
    // 3. 分离式加密，拿到 cipher 和 mac(tag)
    const { cipher, mac } = sodium.crypto_aead_chacha20poly1305_ietf_encrypt_detached(
        messageBuf,
        null,   // 关联数据（可选），Swift 里没用
        null,   // secret nonce（可选），Swift 里没用
        nonce,
        KEY
    );
    // 4. Base64 编码输出
    return {
        ciphertext: sodium.to_base64(cipher),
        nonce: sodium.to_base64(nonce),
        tag: sodium.to_base64(mac)
    };
}

/**
 * 解密
 * @param {{ ciphertext: string, nonce: string, tag: string }} params
 * @returns {string} 明文
 */
export function decryptJS({ ciphertext, nonce, tag }) {
    // 1️⃣ Make sure you actually have strings here:
    if (!ciphertext || !nonce || !tag) {
        throw new Error("Missing ciphertext, nonce or tag");
    }

    // 2️⃣ Decode using the ORIGINAL (RFC‑4648) Base64 variant
    const cipherBuf = sodium.from_base64(
        ciphertext,
        sodium.base64_variants.ORIGINAL
    );
    const nonceBuf = sodium.from_base64(
        nonce,
        sodium.base64_variants.ORIGINAL
    );
    const tagBuf = sodium.from_base64(
        tag,
        sodium.base64_variants.ORIGINAL
    );

    // 3️⃣ Perform the detached decrypt
    const decrypted = sodium.crypto_aead_chacha20poly1305_ietf_decrypt_detached(
        null,       // secret nonce (not used)
        cipherBuf,
        tagBuf,
        null,       // associated data (none)
        nonceBuf,
        KEY         // your imported key
    );

    return sodium.to_string(decrypted);
}