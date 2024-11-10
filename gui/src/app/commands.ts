// commands.ts

export const IDLE_COMMAND = new Uint8Array([0x02, 0x5e, 0x69, 0x5a, 0x48, 0xff, 0x2a, 0x43, 0x8c, 0xa6, 0x80, 0xf8, 0x3e, 0x04, 0xe4, 0x5d]);
export const FORWARD_COMMAND = new Uint8Array([0x29, 0x60, 0x9c, 0x66, 0x48, 0x52, 0xcf, 0xf1, 0xb0, 0xf0, 0xcb, 0xb9, 0x80, 0x14, 0xbd, 0x2c]);
export const FORWARD_TURBO_COMMAND = new Uint8Array([0xe6, 0x55, 0x67, 0xda, 0x8e, 0x6c, 0x56, 0x0d, 0x09, 0xd3, 0x73, 0x3a, 0x7f, 0x47, 0xff, 0x06]);
export const BACKWARD_COMMAND = new Uint8Array([0x03, 0x20, 0x99, 0x09, 0xba, 0x9d, 0xa1, 0xc8, 0xb9, 0x86, 0x16, 0x3c, 0x6d, 0x48, 0x46, 0x55]);
export const BACKWARD_TURBO_COMMAND = new Uint8Array([0xce, 0xc2, 0xff, 0x1d, 0x7a, 0xcc, 0x16, 0x3c, 0xd1, 0x3b, 0x7e, 0x61, 0x53, 0xad, 0x5c, 0x45]);
export const FORWARD_LEFT_COMMAND = new Uint8Array([0x99, 0x28, 0xe5, 0x90, 0xdf, 0xe8, 0x21, 0x48, 0x5f, 0x41, 0x4f, 0xbb, 0x63, 0x3d, 0x5c, 0x4e]);
export const LEFT_COMMAND = new Uint8Array([0x51, 0x38, 0x21, 0x12, 0x13, 0x5c, 0xcc, 0xdb, 0x46, 0xcf, 0x89, 0x21, 0xb7, 0x05, 0x49, 0x9a]);
export const FORWARD_RIGHT_COMMAND = new Uint8Array([0x0f, 0x2c, 0xe5, 0x66, 0x62, 0xd4, 0xfd, 0x9d, 0x32, 0xa4, 0x4f, 0x10, 0x2b, 0xf2, 0x0a, 0xa7]);
export const BACKWARD_LEFT_COMMAND = new Uint8Array([0x98, 0xce, 0x98, 0x1d, 0x58, 0xd1, 0x15, 0xaf, 0xe1, 0x19, 0x60, 0xbf, 0x46, 0x13, 0x92, 0x5c]);
export const RIGHT_COMMAND = new Uint8Array([0x1b, 0x57, 0x69, 0xcd, 0xf1, 0x3e, 0x8a, 0xb6, 0x27, 0x08, 0x0f, 0xf3, 0xce, 0xfc, 0x3b, 0xc0]);
export const BACKWARD_RIGHT_COMMAND = new Uint8Array([0xf2, 0x52, 0x0f, 0xba, 0x31, 0x44, 0xfb, 0x11, 0x46, 0x8f, 0xe0, 0x80, 0xc6, 0xc2, 0xc2, 0x3c]);
export const FORWARD_TURBO_LEFT_COMMAND = new Uint8Array([0x59, 0x23, 0x81, 0xc9, 0x43, 0xa4, 0x17, 0xca, 0x1b, 0xc3, 0xb5, 0x94, 0x00, 0xe0, 0xfc, 0x12]);
export const FORWARD_TURBO_RIGHT_COMMAND = new Uint8Array([0xfb, 0x97, 0x6f, 0xba, 0x04, 0xaf, 0x87, 0x02, 0x22, 0x26, 0xec, 0x50, 0xae, 0x82, 0xf8, 0xc4]);
export const BACKWARD_TURBO_LEFT_COMMAND = new Uint8Array([0xd5, 0x4a, 0xd5, 0x58, 0x57, 0xd3, 0x27, 0x74, 0x5f, 0x14, 0x1d, 0xd0, 0x0d, 0x67, 0x15, 0x95]);
export const BACKWARD_TURBO_RIGHT_COMMAND = new Uint8Array([0x80, 0xdf, 0xb2, 0x16, 0x5f, 0x32, 0x60, 0xf1, 0xd9, 0x83, 0x77, 0x50, 0xf4, 0x3a, 0x43, 0xda]);