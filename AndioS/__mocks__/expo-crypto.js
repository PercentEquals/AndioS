// Mock expo-crypto (https://github.com/expo/expo/issues/6512)
import * as Crypto from "expo-crypto";

export function digestStringAsync(algorithm, data) { 
    return Promise.resolve(`Mocked ${data} encoded as ${algorithm}`);
}

export const CryptoDigestAlgorithm = Crypto.CryptoDigestAlgorithm;