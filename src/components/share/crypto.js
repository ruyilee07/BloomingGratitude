// encrypt.js
import sodium from 'libsodium-wrappers';

// 1️⃣ 预先准备好一个 Promise，用来在第一次使用时初始化 key
const KEY_PROMISE = sodium.ready.then(() => {
  const BASE64_KEY = '5J47CXSTQk+RNWNevZPqNg9RLDCHDQhOdLlSyuzNROo=';
  // 指定 ORIGINAL 模式解码带 "=" 的 Base64
  return sodium.from_base64(BASE64_KEY, sodium.base64_variants.ORIGINAL);
});

/**
 * 对称加密
 * @param {string} plainText
 * @returns {{ ciphertext: string, nonce: string, tag: string }}
 */
export async function encryptJS(plainText) {
  // 2️⃣ 确保 libsodium 已经就绪，并拿到 KEY
  const KEY = await KEY_PROMISE;
  // 3️⃣ 再执行加密逻辑
  const messageBuf = sodium.from_string(plainText);
  const nonce = sodium.randombytes_buf(sodium.crypto_aead_chacha20poly1305_ietf_NPUBBYTES);
  const { cipher, mac } = sodium.crypto_aead_chacha20poly1305_ietf_encrypt_detached(
    messageBuf,
    null, // AAD
    null, // secret nonce
    nonce,
    KEY
  );
  return {
    ciphertext: sodium.to_base64(cipher),
    nonce:      sodium.to_base64(nonce),
    tag:        sodium.to_base64(mac)
  };
}

/**
 * 对称解密
 * @param {{ ciphertext: string, nonce: string, tag: string }} params
 * @returns {string}
 */
export async function decryptJS({ ciphertext, nonce, tag }) {
  // 1️⃣ 确保 libsodium 就绪，拿到 KEY
  const KEY = await KEY_PROMISE;

  // 2️⃣ 解码所有 Base64（指定 ORIGINAL 模式）
  const cipherBuf = sodium.from_base64(ciphertext, sodium.base64_variants.ORIGINAL);
  const macBuf    = sodium.from_base64(tag,        sodium.base64_variants.ORIGINAL);
  const nonceBuf  = sodium.from_base64(nonce,      sodium.base64_variants.ORIGINAL);

  // 3️⃣ 分离式解密
  const decrypted = sodium.crypto_aead_chacha20poly1305_ietf_decrypt_detached(
    null,      // secret nonce
    cipherBuf,
    macBuf,
    null,      // AAD
    nonceBuf,
    KEY
  );

  return sodium.to_string(decrypted);
}
