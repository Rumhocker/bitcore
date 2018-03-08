var Put = require('bufferput');
var buffertools = require('buffertools');
var hex = function(hex) {return new Buffer(hex, 'hex');};

exports.livenet = {
  name: 'livenet',
  magic: hex('e4e8e9e5'),
  addressVersion: 0x35,
  privKeyVersion: 181,
  P2SHVersion: 4,
  hkeyPublicVersion: 0x0488b21e,
  hkeyPrivateVersion: 0x0488ade4,
  genesisBlock: {
    hash: hex('a1cdeb36123b48e2ce59c3ffb888833ecf3d779afdf6102cb7ff3fa1c70a0000'),
    merkle_root: hex('5def52f0e380a698fc529c4aa8c9810d79149a3b2d45b33bb262cb11e22cc5e9'),
    height: 0,
    nonce: 138199,
    version: 1,
    prev_hash: buffertools.fill(new Buffer(32), 0),
    timestamp: 1381515983,
    bits: 486604799,
  },
  dnsSeeds: [
    'seed.deutsche-emark.org'
  ],
  defaultClientPort: 51737
};

exports.testnet = {
  name: 'testnet',
  magic: hex('e4e8e9e5'),
  addressVersion: 0x35,
  privKeyVersion: 181,
  P2SHVersion: 4,
  hkeyPublicVersion: 0x0488b21e,
  hkeyPrivateVersion: 0x0488ade4,
  genesisBlock: {
    hash: hex('a1cdeb36123b48e2ce59c3ffb888833ecf3d779afdf6102cb7ff3fa1c70a0000'),
    merkle_root: hex('5def52f0e380a698fc529c4aa8c9810d79149a3b2d45b33bb262cb11e22cc5e9'),
    height: 0,
    nonce: 138199,
    version: 1,
    prev_hash: buffertools.fill(new Buffer(32), 0),
    timestamp: 1381515983,
    bits: 486604799,
  },
  dnsSeeds: [

  ],
  defaultClientPort: 51997
};
