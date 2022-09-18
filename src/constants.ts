export const { NEXT_PUBLIC_APP_URL } = process.env;
export const BLOCK_ENDPOINT = `${NEXT_PUBLIC_APP_URL}/api/v1/block`;
export const TRANSACTION_ENDPOINT = `${NEXT_PUBLIC_APP_URL}/api/v1/transaction`;
export const ETHEREUM_HASH_REGEX = /^0x([A-Fa-f0-9]{64})$/;
export const ETHEREUM_BLOCK_NUMBER_REGEX = /^\d+$/;
