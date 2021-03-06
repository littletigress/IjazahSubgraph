// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class AccountCreated extends ethereum.Event {
  get params(): AccountCreated__Params {
    return new AccountCreated__Params(this);
  }
}

export class AccountCreated__Params {
  _event: AccountCreated;

  constructor(event: AccountCreated) {
    this._event = event;
  }

  get sender(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get owner(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get role(): Bytes {
    return this._event.parameters[2].value.toBytes();
  }

  get fullName(): Bytes {
    return this._event.parameters[3].value.toBytes();
  }

  get nomorInduk(): Bytes {
    return this._event.parameters[4].value.toBytes();
  }

  get verified(): boolean {
    return this._event.parameters[5].value.toBoolean();
  }

  get timeCreated(): BigInt {
    return this._event.parameters[6].value.toBigInt();
  }
}

export class AccountDeleted extends ethereum.Event {
  get params(): AccountDeleted__Params {
    return new AccountDeleted__Params(this);
  }
}

export class AccountDeleted__Params {
  _event: AccountDeleted;

  constructor(event: AccountDeleted) {
    this._event = event;
  }

  get sender(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get owner(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get timeDeleted(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class AccountNameUpdated extends ethereum.Event {
  get params(): AccountNameUpdated__Params {
    return new AccountNameUpdated__Params(this);
  }
}

export class AccountNameUpdated__Params {
  _event: AccountNameUpdated;

  constructor(event: AccountNameUpdated) {
    this._event = event;
  }

  get sender(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get owner(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get oldName(): Bytes {
    return this._event.parameters[2].value.toBytes();
  }

  get newName(): Bytes {
    return this._event.parameters[3].value.toBytes();
  }

  get timeUpdated(): BigInt {
    return this._event.parameters[4].value.toBigInt();
  }
}

export class AccountUpdated extends ethereum.Event {
  get params(): AccountUpdated__Params {
    return new AccountUpdated__Params(this);
  }
}

export class AccountUpdated__Params {
  _event: AccountUpdated;

  constructor(event: AccountUpdated) {
    this._event = event;
  }

  get sender(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get owner(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get role(): Bytes {
    return this._event.parameters[2].value.toBytes();
  }

  get fullName(): Bytes {
    return this._event.parameters[3].value.toBytes();
  }

  get nomorInduk(): Bytes {
    return this._event.parameters[4].value.toBytes();
  }

  get verified(): boolean {
    return this._event.parameters[5].value.toBoolean();
  }

  get timeUpdated(): BigInt {
    return this._event.parameters[6].value.toBigInt();
  }
}

export class OwnershipTransferred extends ethereum.Event {
  get params(): OwnershipTransferred__Params {
    return new OwnershipTransferred__Params(this);
  }
}

export class OwnershipTransferred__Params {
  _event: OwnershipTransferred;

  constructor(event: OwnershipTransferred) {
    this._event = event;
  }

  get previousOwner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get newOwner(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class RoleAdminChanged extends ethereum.Event {
  get params(): RoleAdminChanged__Params {
    return new RoleAdminChanged__Params(this);
  }
}

export class RoleAdminChanged__Params {
  _event: RoleAdminChanged;

  constructor(event: RoleAdminChanged) {
    this._event = event;
  }

  get role(): Bytes {
    return this._event.parameters[0].value.toBytes();
  }

  get previousAdminRole(): Bytes {
    return this._event.parameters[1].value.toBytes();
  }

  get newAdminRole(): Bytes {
    return this._event.parameters[2].value.toBytes();
  }
}

export class RoleGranted extends ethereum.Event {
  get params(): RoleGranted__Params {
    return new RoleGranted__Params(this);
  }
}

export class RoleGranted__Params {
  _event: RoleGranted;

  constructor(event: RoleGranted) {
    this._event = event;
  }

  get role(): Bytes {
    return this._event.parameters[0].value.toBytes();
  }

  get account(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get sender(): Address {
    return this._event.parameters[2].value.toAddress();
  }
}

export class RoleRemoved extends ethereum.Event {
  get params(): RoleRemoved__Params {
    return new RoleRemoved__Params(this);
  }
}

export class RoleRemoved__Params {
  _event: RoleRemoved;

  constructor(event: RoleRemoved) {
    this._event = event;
  }

  get sender(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get owner(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get role(): Bytes {
    return this._event.parameters[2].value.toBytes();
  }

  get timeRemoved(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }
}

export class RoleRevoked extends ethereum.Event {
  get params(): RoleRevoked__Params {
    return new RoleRevoked__Params(this);
  }
}

export class RoleRevoked__Params {
  _event: RoleRevoked;

  constructor(event: RoleRevoked) {
    this._event = event;
  }

  get role(): Bytes {
    return this._event.parameters[0].value.toBytes();
  }

  get account(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get sender(): Address {
    return this._event.parameters[2].value.toAddress();
  }
}

export class AccountManager__getAccountResult {
  value0: Address;
  value1: boolean;
  value2: Bytes;

  constructor(value0: Address, value1: boolean, value2: Bytes) {
    this.value0 = value0;
    this.value1 = value1;
    this.value2 = value2;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromAddress(this.value0));
    map.set("value1", ethereum.Value.fromBoolean(this.value1));
    map.set("value2", ethereum.Value.fromFixedBytes(this.value2));
    return map;
  }
}

export class AccountManager extends ethereum.SmartContract {
  static bind(address: Address): AccountManager {
    return new AccountManager("AccountManager", address);
  }

  DEFAULT_ADMIN_ROLE(): Bytes {
    let result = super.call(
      "DEFAULT_ADMIN_ROLE",
      "DEFAULT_ADMIN_ROLE():(bytes32)",
      []
    );

    return result[0].toBytes();
  }

  try_DEFAULT_ADMIN_ROLE(): ethereum.CallResult<Bytes> {
    let result = super.tryCall(
      "DEFAULT_ADMIN_ROLE",
      "DEFAULT_ADMIN_ROLE():(bytes32)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  DIKTI_ROLE(): Bytes {
    let result = super.call("DIKTI_ROLE", "DIKTI_ROLE():(bytes32)", []);

    return result[0].toBytes();
  }

  try_DIKTI_ROLE(): ethereum.CallResult<Bytes> {
    let result = super.tryCall("DIKTI_ROLE", "DIKTI_ROLE():(bytes32)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  DOSEN_ROLE(): Bytes {
    let result = super.call("DOSEN_ROLE", "DOSEN_ROLE():(bytes32)", []);

    return result[0].toBytes();
  }

  try_DOSEN_ROLE(): ethereum.CallResult<Bytes> {
    let result = super.tryCall("DOSEN_ROLE", "DOSEN_ROLE():(bytes32)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  KAJUR_ROLE(): Bytes {
    let result = super.call("KAJUR_ROLE", "KAJUR_ROLE():(bytes32)", []);

    return result[0].toBytes();
  }

  try_KAJUR_ROLE(): ethereum.CallResult<Bytes> {
    let result = super.tryCall("KAJUR_ROLE", "KAJUR_ROLE():(bytes32)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  MAHASISWA_ROLE(): Bytes {
    let result = super.call("MAHASISWA_ROLE", "MAHASISWA_ROLE():(bytes32)", []);

    return result[0].toBytes();
  }

  try_MAHASISWA_ROLE(): ethereum.CallResult<Bytes> {
    let result = super.tryCall(
      "MAHASISWA_ROLE",
      "MAHASISWA_ROLE():(bytes32)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  PDII_ROLE(): Bytes {
    let result = super.call("PDII_ROLE", "PDII_ROLE():(bytes32)", []);

    return result[0].toBytes();
  }

  try_PDII_ROLE(): ethereum.CallResult<Bytes> {
    let result = super.tryCall("PDII_ROLE", "PDII_ROLE():(bytes32)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  REKTOR_ROLE(): Bytes {
    let result = super.call("REKTOR_ROLE", "REKTOR_ROLE():(bytes32)", []);

    return result[0].toBytes();
  }

  try_REKTOR_ROLE(): ethereum.CallResult<Bytes> {
    let result = super.tryCall("REKTOR_ROLE", "REKTOR_ROLE():(bytes32)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  getAccount(account: Address): AccountManager__getAccountResult {
    let result = super.call(
      "getAccount",
      "getAccount(address):(address,bool,bytes32)",
      [ethereum.Value.fromAddress(account)]
    );

    return new AccountManager__getAccountResult(
      result[0].toAddress(),
      result[1].toBoolean(),
      result[2].toBytes()
    );
  }

  try_getAccount(
    account: Address
  ): ethereum.CallResult<AccountManager__getAccountResult> {
    let result = super.tryCall(
      "getAccount",
      "getAccount(address):(address,bool,bytes32)",
      [ethereum.Value.fromAddress(account)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new AccountManager__getAccountResult(
        value[0].toAddress(),
        value[1].toBoolean(),
        value[2].toBytes()
      )
    );
  }

  getBytesOfRole(role: Bytes): boolean {
    let result = super.call("getBytesOfRole", "getBytesOfRole(bytes9):(bool)", [
      ethereum.Value.fromFixedBytes(role)
    ]);

    return result[0].toBoolean();
  }

  try_getBytesOfRole(role: Bytes): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "getBytesOfRole",
      "getBytesOfRole(bytes9):(bool)",
      [ethereum.Value.fromFixedBytes(role)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  getRole(account: Address): Bytes {
    let result = super.call("getRole", "getRole(address):(bytes9)", [
      ethereum.Value.fromAddress(account)
    ]);

    return result[0].toBytes();
  }

  try_getRole(account: Address): ethereum.CallResult<Bytes> {
    let result = super.tryCall("getRole", "getRole(address):(bytes9)", [
      ethereum.Value.fromAddress(account)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  getRoleAdmin(role: Bytes): Bytes {
    let result = super.call("getRoleAdmin", "getRoleAdmin(bytes32):(bytes32)", [
      ethereum.Value.fromFixedBytes(role)
    ]);

    return result[0].toBytes();
  }

  try_getRoleAdmin(role: Bytes): ethereum.CallResult<Bytes> {
    let result = super.tryCall(
      "getRoleAdmin",
      "getRoleAdmin(bytes32):(bytes32)",
      [ethereum.Value.fromFixedBytes(role)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  getRoleMember(role: Bytes, index: BigInt): Address {
    let result = super.call(
      "getRoleMember",
      "getRoleMember(bytes32,uint256):(address)",
      [
        ethereum.Value.fromFixedBytes(role),
        ethereum.Value.fromUnsignedBigInt(index)
      ]
    );

    return result[0].toAddress();
  }

  try_getRoleMember(role: Bytes, index: BigInt): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "getRoleMember",
      "getRoleMember(bytes32,uint256):(address)",
      [
        ethereum.Value.fromFixedBytes(role),
        ethereum.Value.fromUnsignedBigInt(index)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  getRoleMemberCount(role: Bytes): BigInt {
    let result = super.call(
      "getRoleMemberCount",
      "getRoleMemberCount(bytes32):(uint256)",
      [ethereum.Value.fromFixedBytes(role)]
    );

    return result[0].toBigInt();
  }

  try_getRoleMemberCount(role: Bytes): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "getRoleMemberCount",
      "getRoleMemberCount(bytes32):(uint256)",
      [ethereum.Value.fromFixedBytes(role)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  hasRole(role: Bytes, account: Address): boolean {
    let result = super.call("hasRole", "hasRole(bytes32,address):(bool)", [
      ethereum.Value.fromFixedBytes(role),
      ethereum.Value.fromAddress(account)
    ]);

    return result[0].toBoolean();
  }

  try_hasRole(role: Bytes, account: Address): ethereum.CallResult<boolean> {
    let result = super.tryCall("hasRole", "hasRole(bytes32,address):(bool)", [
      ethereum.Value.fromFixedBytes(role),
      ethereum.Value.fromAddress(account)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  isAdmin(account: Address): boolean {
    let result = super.call("isAdmin", "isAdmin(address):(bool)", [
      ethereum.Value.fromAddress(account)
    ]);

    return result[0].toBoolean();
  }

  try_isAdmin(account: Address): ethereum.CallResult<boolean> {
    let result = super.tryCall("isAdmin", "isAdmin(address):(bool)", [
      ethereum.Value.fromAddress(account)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  isRegistered(param0: Address): boolean {
    let result = super.call("isRegistered", "isRegistered(address):(bool)", [
      ethereum.Value.fromAddress(param0)
    ]);

    return result[0].toBoolean();
  }

  try_isRegistered(param0: Address): ethereum.CallResult<boolean> {
    let result = super.tryCall("isRegistered", "isRegistered(address):(bool)", [
      ethereum.Value.fromAddress(param0)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  owner(): Address {
    let result = super.call("owner", "owner():(address)", []);

    return result[0].toAddress();
  }

  try_owner(): ethereum.CallResult<Address> {
    let result = super.tryCall("owner", "owner():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  roleToBytes32(param0: Bytes): Bytes {
    let result = super.call(
      "roleToBytes32",
      "roleToBytes32(bytes9):(bytes32)",
      [ethereum.Value.fromFixedBytes(param0)]
    );

    return result[0].toBytes();
  }

  try_roleToBytes32(param0: Bytes): ethereum.CallResult<Bytes> {
    let result = super.tryCall(
      "roleToBytes32",
      "roleToBytes32(bytes9):(bytes32)",
      [ethereum.Value.fromFixedBytes(param0)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  verifyCivitas(
    _address: Address,
    _nip: Bytes,
    _role: Bytes,
    _sender: Address
  ): Address {
    let result = super.call(
      "verifyCivitas",
      "verifyCivitas(address,bytes21,bytes9,address):(address)",
      [
        ethereum.Value.fromAddress(_address),
        ethereum.Value.fromFixedBytes(_nip),
        ethereum.Value.fromFixedBytes(_role),
        ethereum.Value.fromAddress(_sender)
      ]
    );

    return result[0].toAddress();
  }

  try_verifyCivitas(
    _address: Address,
    _nip: Bytes,
    _role: Bytes,
    _sender: Address
  ): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "verifyCivitas",
      "verifyCivitas(address,bytes21,bytes9,address):(address)",
      [
        ethereum.Value.fromAddress(_address),
        ethereum.Value.fromFixedBytes(_nip),
        ethereum.Value.fromFixedBytes(_role),
        ethereum.Value.fromAddress(_sender)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  verifyMahasiswa(_address: Address, _nim: Bytes, _sender: Address): Address {
    let result = super.call(
      "verifyMahasiswa",
      "verifyMahasiswa(address,bytes12,address):(address)",
      [
        ethereum.Value.fromAddress(_address),
        ethereum.Value.fromFixedBytes(_nim),
        ethereum.Value.fromAddress(_sender)
      ]
    );

    return result[0].toAddress();
  }

  try_verifyMahasiswa(
    _address: Address,
    _nim: Bytes,
    _sender: Address
  ): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "verifyMahasiswa",
      "verifyMahasiswa(address,bytes12,address):(address)",
      [
        ethereum.Value.fromAddress(_address),
        ethereum.Value.fromFixedBytes(_nim),
        ethereum.Value.fromAddress(_sender)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }
}

export class ConstructorCall extends ethereum.Call {
  get inputs(): ConstructorCall__Inputs {
    return new ConstructorCall__Inputs(this);
  }

  get outputs(): ConstructorCall__Outputs {
    return new ConstructorCall__Outputs(this);
  }
}

export class ConstructorCall__Inputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class ConstructorCall__Outputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class CreateAccountCall extends ethereum.Call {
  get inputs(): CreateAccountCall__Inputs {
    return new CreateAccountCall__Inputs(this);
  }

  get outputs(): CreateAccountCall__Outputs {
    return new CreateAccountCall__Outputs(this);
  }
}

export class CreateAccountCall__Inputs {
  _call: CreateAccountCall;

  constructor(call: CreateAccountCall) {
    this._call = call;
  }

  get _fullName(): Bytes {
    return this._call.inputValues[0].value.toBytes();
  }

  get _idNumber(): Bytes {
    return this._call.inputValues[1].value.toBytes();
  }

  get _role(): Bytes {
    return this._call.inputValues[2].value.toBytes();
  }
}

export class CreateAccountCall__Outputs {
  _call: CreateAccountCall;

  constructor(call: CreateAccountCall) {
    this._call = call;
  }
}

export class DeleteAccountCall extends ethereum.Call {
  get inputs(): DeleteAccountCall__Inputs {
    return new DeleteAccountCall__Inputs(this);
  }

  get outputs(): DeleteAccountCall__Outputs {
    return new DeleteAccountCall__Outputs(this);
  }
}

export class DeleteAccountCall__Inputs {
  _call: DeleteAccountCall;

  constructor(call: DeleteAccountCall) {
    this._call = call;
  }

  get accountAddress(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class DeleteAccountCall__Outputs {
  _call: DeleteAccountCall;

  constructor(call: DeleteAccountCall) {
    this._call = call;
  }
}

export class GrantRoleCall extends ethereum.Call {
  get inputs(): GrantRoleCall__Inputs {
    return new GrantRoleCall__Inputs(this);
  }

  get outputs(): GrantRoleCall__Outputs {
    return new GrantRoleCall__Outputs(this);
  }
}

export class GrantRoleCall__Inputs {
  _call: GrantRoleCall;

  constructor(call: GrantRoleCall) {
    this._call = call;
  }

  get role(): Bytes {
    return this._call.inputValues[0].value.toBytes();
  }

  get account(): Address {
    return this._call.inputValues[1].value.toAddress();
  }
}

export class GrantRoleCall__Outputs {
  _call: GrantRoleCall;

  constructor(call: GrantRoleCall) {
    this._call = call;
  }
}

export class LepasRoleCall extends ethereum.Call {
  get inputs(): LepasRoleCall__Inputs {
    return new LepasRoleCall__Inputs(this);
  }

  get outputs(): LepasRoleCall__Outputs {
    return new LepasRoleCall__Outputs(this);
  }
}

export class LepasRoleCall__Inputs {
  _call: LepasRoleCall;

  constructor(call: LepasRoleCall) {
    this._call = call;
  }

  get _address(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _role(): Bytes {
    return this._call.inputValues[1].value.toBytes();
  }
}

export class LepasRoleCall__Outputs {
  _call: LepasRoleCall;

  constructor(call: LepasRoleCall) {
    this._call = call;
  }
}

export class RenounceOwnershipCall extends ethereum.Call {
  get inputs(): RenounceOwnershipCall__Inputs {
    return new RenounceOwnershipCall__Inputs(this);
  }

  get outputs(): RenounceOwnershipCall__Outputs {
    return new RenounceOwnershipCall__Outputs(this);
  }
}

export class RenounceOwnershipCall__Inputs {
  _call: RenounceOwnershipCall;

  constructor(call: RenounceOwnershipCall) {
    this._call = call;
  }
}

export class RenounceOwnershipCall__Outputs {
  _call: RenounceOwnershipCall;

  constructor(call: RenounceOwnershipCall) {
    this._call = call;
  }
}

export class RenounceRoleCall extends ethereum.Call {
  get inputs(): RenounceRoleCall__Inputs {
    return new RenounceRoleCall__Inputs(this);
  }

  get outputs(): RenounceRoleCall__Outputs {
    return new RenounceRoleCall__Outputs(this);
  }
}

export class RenounceRoleCall__Inputs {
  _call: RenounceRoleCall;

  constructor(call: RenounceRoleCall) {
    this._call = call;
  }

  get role(): Bytes {
    return this._call.inputValues[0].value.toBytes();
  }

  get account(): Address {
    return this._call.inputValues[1].value.toAddress();
  }
}

export class RenounceRoleCall__Outputs {
  _call: RenounceRoleCall;

  constructor(call: RenounceRoleCall) {
    this._call = call;
  }
}

export class RevokeRoleCall extends ethereum.Call {
  get inputs(): RevokeRoleCall__Inputs {
    return new RevokeRoleCall__Inputs(this);
  }

  get outputs(): RevokeRoleCall__Outputs {
    return new RevokeRoleCall__Outputs(this);
  }
}

export class RevokeRoleCall__Inputs {
  _call: RevokeRoleCall;

  constructor(call: RevokeRoleCall) {
    this._call = call;
  }

  get role(): Bytes {
    return this._call.inputValues[0].value.toBytes();
  }

  get account(): Address {
    return this._call.inputValues[1].value.toAddress();
  }
}

export class RevokeRoleCall__Outputs {
  _call: RevokeRoleCall;

  constructor(call: RevokeRoleCall) {
    this._call = call;
  }
}

export class TransferOwnershipCall extends ethereum.Call {
  get inputs(): TransferOwnershipCall__Inputs {
    return new TransferOwnershipCall__Inputs(this);
  }

  get outputs(): TransferOwnershipCall__Outputs {
    return new TransferOwnershipCall__Outputs(this);
  }
}

export class TransferOwnershipCall__Inputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }

  get newOwner(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class TransferOwnershipCall__Outputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }
}

export class UpdateAccountNameCall extends ethereum.Call {
  get inputs(): UpdateAccountNameCall__Inputs {
    return new UpdateAccountNameCall__Inputs(this);
  }

  get outputs(): UpdateAccountNameCall__Outputs {
    return new UpdateAccountNameCall__Outputs(this);
  }
}

export class UpdateAccountNameCall__Inputs {
  _call: UpdateAccountNameCall;

  constructor(call: UpdateAccountNameCall) {
    this._call = call;
  }

  get _fullName(): Bytes {
    return this._call.inputValues[0].value.toBytes();
  }
}

export class UpdateAccountNameCall__Outputs {
  _call: UpdateAccountNameCall;

  constructor(call: UpdateAccountNameCall) {
    this._call = call;
  }
}

export class VerifyCivitasCall extends ethereum.Call {
  get inputs(): VerifyCivitasCall__Inputs {
    return new VerifyCivitasCall__Inputs(this);
  }

  get outputs(): VerifyCivitasCall__Outputs {
    return new VerifyCivitasCall__Outputs(this);
  }
}

export class VerifyCivitasCall__Inputs {
  _call: VerifyCivitasCall;

  constructor(call: VerifyCivitasCall) {
    this._call = call;
  }

  get _address(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _nip(): Bytes {
    return this._call.inputValues[1].value.toBytes();
  }

  get _role(): Bytes {
    return this._call.inputValues[2].value.toBytes();
  }

  get _sender(): Address {
    return this._call.inputValues[3].value.toAddress();
  }
}

export class VerifyCivitasCall__Outputs {
  _call: VerifyCivitasCall;

  constructor(call: VerifyCivitasCall) {
    this._call = call;
  }

  get _owner(): Address {
    return this._call.outputValues[0].value.toAddress();
  }
}

export class VerifyDIKTICall extends ethereum.Call {
  get inputs(): VerifyDIKTICall__Inputs {
    return new VerifyDIKTICall__Inputs(this);
  }

  get outputs(): VerifyDIKTICall__Outputs {
    return new VerifyDIKTICall__Outputs(this);
  }
}

export class VerifyDIKTICall__Inputs {
  _call: VerifyDIKTICall;

  constructor(call: VerifyDIKTICall) {
    this._call = call;
  }

  get _address(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class VerifyDIKTICall__Outputs {
  _call: VerifyDIKTICall;

  constructor(call: VerifyDIKTICall) {
    this._call = call;
  }
}

export class VerifyMahasiswaCall extends ethereum.Call {
  get inputs(): VerifyMahasiswaCall__Inputs {
    return new VerifyMahasiswaCall__Inputs(this);
  }

  get outputs(): VerifyMahasiswaCall__Outputs {
    return new VerifyMahasiswaCall__Outputs(this);
  }
}

export class VerifyMahasiswaCall__Inputs {
  _call: VerifyMahasiswaCall;

  constructor(call: VerifyMahasiswaCall) {
    this._call = call;
  }

  get _address(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _nim(): Bytes {
    return this._call.inputValues[1].value.toBytes();
  }

  get _sender(): Address {
    return this._call.inputValues[2].value.toAddress();
  }
}

export class VerifyMahasiswaCall__Outputs {
  _call: VerifyMahasiswaCall;

  constructor(call: VerifyMahasiswaCall) {
    this._call = call;
  }

  get _owner(): Address {
    return this._call.outputValues[0].value.toAddress();
  }
}
