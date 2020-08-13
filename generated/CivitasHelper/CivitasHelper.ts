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

export class AccountManagerUpdated extends ethereum.Event {
  get params(): AccountManagerUpdated__Params {
    return new AccountManagerUpdated__Params(this);
  }
}

export class AccountManagerUpdated__Params {
  _event: AccountManagerUpdated;

  constructor(event: AccountManagerUpdated) {
    this._event = event;
  }

  get sender(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get oldAddress(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get newAddress(): Address {
    return this._event.parameters[2].value.toAddress();
  }

  get timeUpdated(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }
}

export class CivitasAccountLinked extends ethereum.Event {
  get params(): CivitasAccountLinked__Params {
    return new CivitasAccountLinked__Params(this);
  }
}

export class CivitasAccountLinked__Params {
  _event: CivitasAccountLinked;

  constructor(event: CivitasAccountLinked) {
    this._event = event;
  }

  get sender(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get account(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get nip(): Bytes {
    return this._event.parameters[2].value.toBytes();
  }

  get timeLinked(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }
}

export class CivitasAccountUnlinked extends ethereum.Event {
  get params(): CivitasAccountUnlinked__Params {
    return new CivitasAccountUnlinked__Params(this);
  }
}

export class CivitasAccountUnlinked__Params {
  _event: CivitasAccountUnlinked;

  constructor(event: CivitasAccountUnlinked) {
    this._event = event;
  }

  get sender(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get account(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get timeUnlinked(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class CivitasCreated extends ethereum.Event {
  get params(): CivitasCreated__Params {
    return new CivitasCreated__Params(this);
  }
}

export class CivitasCreated__Params {
  _event: CivitasCreated;

  constructor(event: CivitasCreated) {
    this._event = event;
  }

  get sender(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get nip(): Bytes {
    return this._event.parameters[1].value.toBytes();
  }

  get fullName(): Bytes {
    return this._event.parameters[2].value.toBytes();
  }

  get timeCreated(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }
}

export class CivitasNIPUpdated extends ethereum.Event {
  get params(): CivitasNIPUpdated__Params {
    return new CivitasNIPUpdated__Params(this);
  }
}

export class CivitasNIPUpdated__Params {
  _event: CivitasNIPUpdated;

  constructor(event: CivitasNIPUpdated) {
    this._event = event;
  }

  get sender(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get oldNIP(): Bytes {
    return this._event.parameters[1].value.toBytes();
  }

  get newNIP(): Bytes {
    return this._event.parameters[2].value.toBytes();
  }

  get timeUpdated(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }
}

export class CivitasUpdated extends ethereum.Event {
  get params(): CivitasUpdated__Params {
    return new CivitasUpdated__Params(this);
  }
}

export class CivitasUpdated__Params {
  _event: CivitasUpdated;

  constructor(event: CivitasUpdated) {
    this._event = event;
  }

  get sender(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get nip(): Bytes {
    return this._event.parameters[1].value.toBytes();
  }

  get fullName(): Bytes {
    return this._event.parameters[2].value.toBytes();
  }

  get newIpfsHash(): Bytes {
    return this._event.parameters[3].value.toBytes();
  }

  get oldIpfsHash(): Bytes {
    return this._event.parameters[4].value.toBytes();
  }

  get timeUpdated(): BigInt {
    return this._event.parameters[5].value.toBigInt();
  }
}

export class DosenAdded extends ethereum.Event {
  get params(): DosenAdded__Params {
    return new DosenAdded__Params(this);
  }
}

export class DosenAdded__Params {
  _event: DosenAdded;

  constructor(event: DosenAdded) {
    this._event = event;
  }

  get sender(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get ID(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get nip(): Bytes {
    return this._event.parameters[2].value.toBytes();
  }

  get fullName(): Bytes {
    return this._event.parameters[3].value.toBytes();
  }

  get timeAdded(): BigInt {
    return this._event.parameters[4].value.toBigInt();
  }
}

export class DosenStatusChanged extends ethereum.Event {
  get params(): DosenStatusChanged__Params {
    return new DosenStatusChanged__Params(this);
  }
}

export class DosenStatusChanged__Params {
  _event: DosenStatusChanged;

  constructor(event: DosenStatusChanged) {
    this._event = event;
  }

  get sender(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get ID(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get nip(): Bytes {
    return this._event.parameters[2].value.toBytes();
  }

  get status(): boolean {
    return this._event.parameters[3].value.toBoolean();
  }

  get timeUpdated(): BigInt {
    return this._event.parameters[4].value.toBigInt();
  }
}

export class MahasiswaAccountLinked extends ethereum.Event {
  get params(): MahasiswaAccountLinked__Params {
    return new MahasiswaAccountLinked__Params(this);
  }
}

export class MahasiswaAccountLinked__Params {
  _event: MahasiswaAccountLinked;

  constructor(event: MahasiswaAccountLinked) {
    this._event = event;
  }

  get sender(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get account(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get nim(): Bytes {
    return this._event.parameters[2].value.toBytes();
  }

  get timeLinked(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }
}

export class MahasiswaAccountUnlinked extends ethereum.Event {
  get params(): MahasiswaAccountUnlinked__Params {
    return new MahasiswaAccountUnlinked__Params(this);
  }
}

export class MahasiswaAccountUnlinked__Params {
  _event: MahasiswaAccountUnlinked;

  constructor(event: MahasiswaAccountUnlinked) {
    this._event = event;
  }

  get sender(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get account(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get timeUnlinked(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class MahasiswaCreated extends ethereum.Event {
  get params(): MahasiswaCreated__Params {
    return new MahasiswaCreated__Params(this);
  }
}

export class MahasiswaCreated__Params {
  _event: MahasiswaCreated;

  constructor(event: MahasiswaCreated) {
    this._event = event;
  }

  get sender(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get nim(): Bytes {
    return this._event.parameters[1].value.toBytes();
  }

  get fullName(): Bytes {
    return this._event.parameters[2].value.toBytes();
  }

  get prodi(): Bytes {
    return this._event.parameters[3].value.toBytes();
  }

  get isLulus(): boolean {
    return this._event.parameters[4].value.toBoolean();
  }

  get timeCreated(): BigInt {
    return this._event.parameters[5].value.toBigInt();
  }
}

export class MahasiswaNIMUpdated extends ethereum.Event {
  get params(): MahasiswaNIMUpdated__Params {
    return new MahasiswaNIMUpdated__Params(this);
  }
}

export class MahasiswaNIMUpdated__Params {
  _event: MahasiswaNIMUpdated;

  constructor(event: MahasiswaNIMUpdated) {
    this._event = event;
  }

  get sender(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get oldNIM(): Bytes {
    return this._event.parameters[1].value.toBytes();
  }

  get newNIM(): Bytes {
    return this._event.parameters[2].value.toBytes();
  }

  get timeUpdated(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }
}

export class MahasiswaUpdated extends ethereum.Event {
  get params(): MahasiswaUpdated__Params {
    return new MahasiswaUpdated__Params(this);
  }
}

export class MahasiswaUpdated__Params {
  _event: MahasiswaUpdated;

  constructor(event: MahasiswaUpdated) {
    this._event = event;
  }

  get sender(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get nim(): Bytes {
    return this._event.parameters[1].value.toBytes();
  }

  get fullName(): Bytes {
    return this._event.parameters[2].value.toBytes();
  }

  get newIpfsHash(): Bytes {
    return this._event.parameters[3].value.toBytes();
  }

  get oldIpfsHash(): Bytes {
    return this._event.parameters[4].value.toBytes();
  }

  get timeUpdated(): BigInt {
    return this._event.parameters[5].value.toBigInt();
  }
}

export class CivitasHelper__getCivitasResult {
  value0: Bytes;
  value1: Bytes;

  constructor(value0: Bytes, value1: Bytes) {
    this.value0 = value0;
    this.value1 = value1;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromFixedBytes(this.value0));
    map.set("value1", ethereum.Value.fromBytes(this.value1));
    return map;
  }
}

export class CivitasHelper__getMahasiswaResult {
  value0: Bytes;
  value1: Bytes;

  constructor(value0: Bytes, value1: Bytes) {
    this.value0 = value0;
    this.value1 = value1;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromFixedBytes(this.value0));
    map.set("value1", ethereum.Value.fromBytes(this.value1));
    return map;
  }
}

export class CivitasHelper extends ethereum.SmartContract {
  static bind(address: Address): CivitasHelper {
    return new CivitasHelper("CivitasHelper", address);
  }

  dosenAktif(param0: BigInt): boolean {
    let result = super.call("dosenAktif", "dosenAktif(uint256):(bool)", [
      ethereum.Value.fromUnsignedBigInt(param0)
    ]);

    return result[0].toBoolean();
  }

  try_dosenAktif(param0: BigInt): ethereum.CallResult<boolean> {
    let result = super.tryCall("dosenAktif", "dosenAktif(uint256):(bool)", [
      ethereum.Value.fromUnsignedBigInt(param0)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  getCivitas(NIP: Bytes): CivitasHelper__getCivitasResult {
    let result = super.call(
      "getCivitas",
      "getCivitas(bytes21):(bytes21,bytes)",
      [ethereum.Value.fromFixedBytes(NIP)]
    );

    return new CivitasHelper__getCivitasResult(
      result[0].toBytes(),
      result[1].toBytes()
    );
  }

  try_getCivitas(
    NIP: Bytes
  ): ethereum.CallResult<CivitasHelper__getCivitasResult> {
    let result = super.tryCall(
      "getCivitas",
      "getCivitas(bytes21):(bytes21,bytes)",
      [ethereum.Value.fromFixedBytes(NIP)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new CivitasHelper__getCivitasResult(
        value[0].toBytes(),
        value[1].toBytes()
      )
    );
  }

  getMahasiswa(NIM: Bytes): CivitasHelper__getMahasiswaResult {
    let result = super.call(
      "getMahasiswa",
      "getMahasiswa(bytes12):(bytes12,bytes)",
      [ethereum.Value.fromFixedBytes(NIM)]
    );

    return new CivitasHelper__getMahasiswaResult(
      result[0].toBytes(),
      result[1].toBytes()
    );
  }

  try_getMahasiswa(
    NIM: Bytes
  ): ethereum.CallResult<CivitasHelper__getMahasiswaResult> {
    let result = super.tryCall(
      "getMahasiswa",
      "getMahasiswa(bytes12):(bytes12,bytes)",
      [ethereum.Value.fromFixedBytes(NIM)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new CivitasHelper__getMahasiswaResult(
        value[0].toBytes(),
        value[1].toBytes()
      )
    );
  }

  getNIMMahasiswa(owner: Address): Bytes {
    let result = super.call(
      "getNIMMahasiswa",
      "getNIMMahasiswa(address):(bytes12)",
      [ethereum.Value.fromAddress(owner)]
    );

    return result[0].toBytes();
  }

  try_getNIMMahasiswa(owner: Address): ethereum.CallResult<Bytes> {
    let result = super.tryCall(
      "getNIMMahasiswa",
      "getNIMMahasiswa(address):(bytes12)",
      [ethereum.Value.fromAddress(owner)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  getNIPCivitas(owner: Address): Bytes {
    let result = super.call(
      "getNIPCivitas",
      "getNIPCivitas(address):(bytes21)",
      [ethereum.Value.fromAddress(owner)]
    );

    return result[0].toBytes();
  }

  try_getNIPCivitas(owner: Address): ethereum.CallResult<Bytes> {
    let result = super.tryCall(
      "getNIPCivitas",
      "getNIPCivitas(address):(bytes21)",
      [ethereum.Value.fromAddress(owner)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  getNIPDosen(id: BigInt): Bytes {
    let result = super.call("getNIPDosen", "getNIPDosen(uint256):(bytes21)", [
      ethereum.Value.fromUnsignedBigInt(id)
    ]);

    return result[0].toBytes();
  }

  try_getNIPDosen(id: BigInt): ethereum.CallResult<Bytes> {
    let result = super.tryCall(
      "getNIPDosen",
      "getNIPDosen(uint256):(bytes21)",
      [ethereum.Value.fromUnsignedBigInt(id)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  isCivitasExist(param0: Bytes): boolean {
    let result = super.call(
      "isCivitasExist",
      "isCivitasExist(bytes21):(bool)",
      [ethereum.Value.fromFixedBytes(param0)]
    );

    return result[0].toBoolean();
  }

  try_isCivitasExist(param0: Bytes): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "isCivitasExist",
      "isCivitasExist(bytes21):(bool)",
      [ethereum.Value.fromFixedBytes(param0)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  isMahasiswaExist(param0: Bytes): boolean {
    let result = super.call(
      "isMahasiswaExist",
      "isMahasiswaExist(bytes12):(bool)",
      [ethereum.Value.fromFixedBytes(param0)]
    );

    return result[0].toBoolean();
  }

  try_isMahasiswaExist(param0: Bytes): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "isMahasiswaExist",
      "isMahasiswaExist(bytes12):(bool)",
      [ethereum.Value.fromFixedBytes(param0)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
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

  get accountManagerAddress(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class ConstructorCall__Outputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class CreateCivitasCall extends ethereum.Call {
  get inputs(): CreateCivitasCall__Inputs {
    return new CreateCivitasCall__Inputs(this);
  }

  get outputs(): CreateCivitasCall__Outputs {
    return new CreateCivitasCall__Outputs(this);
  }
}

export class CreateCivitasCall__Inputs {
  _call: CreateCivitasCall;

  constructor(call: CreateCivitasCall) {
    this._call = call;
  }

  get _nip(): Bytes {
    return this._call.inputValues[0].value.toBytes();
  }

  get _fullName(): Bytes {
    return this._call.inputValues[1].value.toBytes();
  }

  get _ipfsHash(): Bytes {
    return this._call.inputValues[2].value.toBytes();
  }

  get _isDosen(): boolean {
    return this._call.inputValues[3].value.toBoolean();
  }
}

export class CreateCivitasCall__Outputs {
  _call: CreateCivitasCall;

  constructor(call: CreateCivitasCall) {
    this._call = call;
  }
}

export class CreateMahasiswaCall extends ethereum.Call {
  get inputs(): CreateMahasiswaCall__Inputs {
    return new CreateMahasiswaCall__Inputs(this);
  }

  get outputs(): CreateMahasiswaCall__Outputs {
    return new CreateMahasiswaCall__Outputs(this);
  }
}

export class CreateMahasiswaCall__Inputs {
  _call: CreateMahasiswaCall;

  constructor(call: CreateMahasiswaCall) {
    this._call = call;
  }

  get _nim(): Bytes {
    return this._call.inputValues[0].value.toBytes();
  }

  get _fullName(): Bytes {
    return this._call.inputValues[1].value.toBytes();
  }

  get _ipfsHash(): Bytes {
    return this._call.inputValues[2].value.toBytes();
  }

  get _prodi(): Bytes {
    return this._call.inputValues[3].value.toBytes();
  }
}

export class CreateMahasiswaCall__Outputs {
  _call: CreateMahasiswaCall;

  constructor(call: CreateMahasiswaCall) {
    this._call = call;
  }
}

export class LinkCivitasAccountCall extends ethereum.Call {
  get inputs(): LinkCivitasAccountCall__Inputs {
    return new LinkCivitasAccountCall__Inputs(this);
  }

  get outputs(): LinkCivitasAccountCall__Outputs {
    return new LinkCivitasAccountCall__Outputs(this);
  }
}

export class LinkCivitasAccountCall__Inputs {
  _call: LinkCivitasAccountCall;

  constructor(call: LinkCivitasAccountCall) {
    this._call = call;
  }

  get _address(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _nip(): Bytes {
    return this._call.inputValues[1].value.toBytes();
  }
}

export class LinkCivitasAccountCall__Outputs {
  _call: LinkCivitasAccountCall;

  constructor(call: LinkCivitasAccountCall) {
    this._call = call;
  }
}

export class LinkMahasiswaAccountCall extends ethereum.Call {
  get inputs(): LinkMahasiswaAccountCall__Inputs {
    return new LinkMahasiswaAccountCall__Inputs(this);
  }

  get outputs(): LinkMahasiswaAccountCall__Outputs {
    return new LinkMahasiswaAccountCall__Outputs(this);
  }
}

export class LinkMahasiswaAccountCall__Inputs {
  _call: LinkMahasiswaAccountCall;

  constructor(call: LinkMahasiswaAccountCall) {
    this._call = call;
  }

  get _address(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _nim(): Bytes {
    return this._call.inputValues[1].value.toBytes();
  }
}

export class LinkMahasiswaAccountCall__Outputs {
  _call: LinkMahasiswaAccountCall;

  constructor(call: LinkMahasiswaAccountCall) {
    this._call = call;
  }
}

export class UnlinkCivitasAccountCall extends ethereum.Call {
  get inputs(): UnlinkCivitasAccountCall__Inputs {
    return new UnlinkCivitasAccountCall__Inputs(this);
  }

  get outputs(): UnlinkCivitasAccountCall__Outputs {
    return new UnlinkCivitasAccountCall__Outputs(this);
  }
}

export class UnlinkCivitasAccountCall__Inputs {
  _call: UnlinkCivitasAccountCall;

  constructor(call: UnlinkCivitasAccountCall) {
    this._call = call;
  }

  get owner(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class UnlinkCivitasAccountCall__Outputs {
  _call: UnlinkCivitasAccountCall;

  constructor(call: UnlinkCivitasAccountCall) {
    this._call = call;
  }
}

export class UnlinkMahasiswaAccountCall extends ethereum.Call {
  get inputs(): UnlinkMahasiswaAccountCall__Inputs {
    return new UnlinkMahasiswaAccountCall__Inputs(this);
  }

  get outputs(): UnlinkMahasiswaAccountCall__Outputs {
    return new UnlinkMahasiswaAccountCall__Outputs(this);
  }
}

export class UnlinkMahasiswaAccountCall__Inputs {
  _call: UnlinkMahasiswaAccountCall;

  constructor(call: UnlinkMahasiswaAccountCall) {
    this._call = call;
  }

  get owner(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class UnlinkMahasiswaAccountCall__Outputs {
  _call: UnlinkMahasiswaAccountCall;

  constructor(call: UnlinkMahasiswaAccountCall) {
    this._call = call;
  }
}

export class UpdateAccountManagerCall extends ethereum.Call {
  get inputs(): UpdateAccountManagerCall__Inputs {
    return new UpdateAccountManagerCall__Inputs(this);
  }

  get outputs(): UpdateAccountManagerCall__Outputs {
    return new UpdateAccountManagerCall__Outputs(this);
  }
}

export class UpdateAccountManagerCall__Inputs {
  _call: UpdateAccountManagerCall;

  constructor(call: UpdateAccountManagerCall) {
    this._call = call;
  }

  get newAddress(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class UpdateAccountManagerCall__Outputs {
  _call: UpdateAccountManagerCall;

  constructor(call: UpdateAccountManagerCall) {
    this._call = call;
  }
}

export class UpdateCivitasDataCall extends ethereum.Call {
  get inputs(): UpdateCivitasDataCall__Inputs {
    return new UpdateCivitasDataCall__Inputs(this);
  }

  get outputs(): UpdateCivitasDataCall__Outputs {
    return new UpdateCivitasDataCall__Outputs(this);
  }
}

export class UpdateCivitasDataCall__Inputs {
  _call: UpdateCivitasDataCall;

  constructor(call: UpdateCivitasDataCall) {
    this._call = call;
  }

  get _nip(): Bytes {
    return this._call.inputValues[0].value.toBytes();
  }

  get _fullName(): Bytes {
    return this._call.inputValues[1].value.toBytes();
  }

  get _newIpfsHash(): Bytes {
    return this._call.inputValues[2].value.toBytes();
  }
}

export class UpdateCivitasDataCall__Outputs {
  _call: UpdateCivitasDataCall;

  constructor(call: UpdateCivitasDataCall) {
    this._call = call;
  }
}

export class UpdateDosenStatusCall extends ethereum.Call {
  get inputs(): UpdateDosenStatusCall__Inputs {
    return new UpdateDosenStatusCall__Inputs(this);
  }

  get outputs(): UpdateDosenStatusCall__Outputs {
    return new UpdateDosenStatusCall__Outputs(this);
  }
}

export class UpdateDosenStatusCall__Inputs {
  _call: UpdateDosenStatusCall;

  constructor(call: UpdateDosenStatusCall) {
    this._call = call;
  }

  get id(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get status(): boolean {
    return this._call.inputValues[1].value.toBoolean();
  }
}

export class UpdateDosenStatusCall__Outputs {
  _call: UpdateDosenStatusCall;

  constructor(call: UpdateDosenStatusCall) {
    this._call = call;
  }
}

export class UpdateMahasiswaDataCall extends ethereum.Call {
  get inputs(): UpdateMahasiswaDataCall__Inputs {
    return new UpdateMahasiswaDataCall__Inputs(this);
  }

  get outputs(): UpdateMahasiswaDataCall__Outputs {
    return new UpdateMahasiswaDataCall__Outputs(this);
  }
}

export class UpdateMahasiswaDataCall__Inputs {
  _call: UpdateMahasiswaDataCall;

  constructor(call: UpdateMahasiswaDataCall) {
    this._call = call;
  }

  get _nim(): Bytes {
    return this._call.inputValues[0].value.toBytes();
  }

  get _fullName(): Bytes {
    return this._call.inputValues[1].value.toBytes();
  }

  get _newIpfsHash(): Bytes {
    return this._call.inputValues[2].value.toBytes();
  }
}

export class UpdateMahasiswaDataCall__Outputs {
  _call: UpdateMahasiswaDataCall;

  constructor(call: UpdateMahasiswaDataCall) {
    this._call = call;
  }
}

export class UpdateNIMMahasiswaCall extends ethereum.Call {
  get inputs(): UpdateNIMMahasiswaCall__Inputs {
    return new UpdateNIMMahasiswaCall__Inputs(this);
  }

  get outputs(): UpdateNIMMahasiswaCall__Outputs {
    return new UpdateNIMMahasiswaCall__Outputs(this);
  }
}

export class UpdateNIMMahasiswaCall__Inputs {
  _call: UpdateNIMMahasiswaCall;

  constructor(call: UpdateNIMMahasiswaCall) {
    this._call = call;
  }

  get _oldNIM(): Bytes {
    return this._call.inputValues[0].value.toBytes();
  }

  get _newNIM(): Bytes {
    return this._call.inputValues[1].value.toBytes();
  }
}

export class UpdateNIMMahasiswaCall__Outputs {
  _call: UpdateNIMMahasiswaCall;

  constructor(call: UpdateNIMMahasiswaCall) {
    this._call = call;
  }
}

export class UpdateNIPCivitasCall extends ethereum.Call {
  get inputs(): UpdateNIPCivitasCall__Inputs {
    return new UpdateNIPCivitasCall__Inputs(this);
  }

  get outputs(): UpdateNIPCivitasCall__Outputs {
    return new UpdateNIPCivitasCall__Outputs(this);
  }
}

export class UpdateNIPCivitasCall__Inputs {
  _call: UpdateNIPCivitasCall;

  constructor(call: UpdateNIPCivitasCall) {
    this._call = call;
  }

  get _oldNIP(): Bytes {
    return this._call.inputValues[0].value.toBytes();
  }

  get _newNIP(): Bytes {
    return this._call.inputValues[1].value.toBytes();
  }
}

export class UpdateNIPCivitasCall__Outputs {
  _call: UpdateNIPCivitasCall;

  constructor(call: UpdateNIPCivitasCall) {
    this._call = call;
  }
}
