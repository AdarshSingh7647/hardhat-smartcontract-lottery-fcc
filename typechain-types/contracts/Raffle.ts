/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PayableOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
} from "../common";

export interface RaffleInterface extends utils.Interface {
  functions: {
    "checkUpkeep(bytes)": FunctionFragment;
    "enterRaffle()": FunctionFragment;
    "getEntranceFee()": FunctionFragment;
    "getInterval()": FunctionFragment;
    "getLastTimeStamp()": FunctionFragment;
    "getNumWords()": FunctionFragment;
    "getPlayer(uint256)": FunctionFragment;
    "getRaffleState()": FunctionFragment;
    "getRecentWinner()": FunctionFragment;
    "getRequestConfirmations()": FunctionFragment;
    "owner()": FunctionFragment;
    "performUpkeep(bytes)": FunctionFragment;
    "rawFulfillRandomWords(uint256,uint256[])": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "checkUpkeep"
      | "enterRaffle"
      | "getEntranceFee"
      | "getInterval"
      | "getLastTimeStamp"
      | "getNumWords"
      | "getPlayer"
      | "getRaffleState"
      | "getRecentWinner"
      | "getRequestConfirmations"
      | "owner"
      | "performUpkeep"
      | "rawFulfillRandomWords"
      | "renounceOwnership"
      | "transferOwnership"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "checkUpkeep",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "enterRaffle",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getEntranceFee",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getInterval",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getLastTimeStamp",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getNumWords",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getPlayer",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getRaffleState",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getRecentWinner",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getRequestConfirmations",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "performUpkeep",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "rawFulfillRandomWords",
    values: [BigNumberish, BigNumberish[]]
  ): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [string]
  ): string;

  decodeFunctionResult(
    functionFragment: "checkUpkeep",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "enterRaffle",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getEntranceFee",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getInterval",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getLastTimeStamp",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getNumWords",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getPlayer", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getRaffleState",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getRecentWinner",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getRequestConfirmations",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "performUpkeep",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "rawFulfillRandomWords",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;

  events: {
    "OwnershipTransferred(address,address)": EventFragment;
    "RaffleEnter(address)": EventFragment;
    "RequestedRaffleWinner(uint256)": EventFragment;
    "WinnerPicked(address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "RaffleEnter"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "RequestedRaffleWinner"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "WinnerPicked"): EventFragment;
}

export interface OwnershipTransferredEventObject {
  previousOwner: string;
  newOwner: string;
}
export type OwnershipTransferredEvent = TypedEvent<
  [string, string],
  OwnershipTransferredEventObject
>;

export type OwnershipTransferredEventFilter =
  TypedEventFilter<OwnershipTransferredEvent>;

export interface RaffleEnterEventObject {
  player: string;
}
export type RaffleEnterEvent = TypedEvent<[string], RaffleEnterEventObject>;

export type RaffleEnterEventFilter = TypedEventFilter<RaffleEnterEvent>;

export interface RequestedRaffleWinnerEventObject {
  requestId: BigNumber;
}
export type RequestedRaffleWinnerEvent = TypedEvent<
  [BigNumber],
  RequestedRaffleWinnerEventObject
>;

export type RequestedRaffleWinnerEventFilter =
  TypedEventFilter<RequestedRaffleWinnerEvent>;

export interface WinnerPickedEventObject {
  player: string;
}
export type WinnerPickedEvent = TypedEvent<[string], WinnerPickedEventObject>;

export type WinnerPickedEventFilter = TypedEventFilter<WinnerPickedEvent>;

export interface Raffle extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: RaffleInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    checkUpkeep(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<[boolean, string] & { upkeepNeeded: boolean }>;

    enterRaffle(
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    getEntranceFee(overrides?: CallOverrides): Promise<[BigNumber]>;

    getInterval(overrides?: CallOverrides): Promise<[BigNumber]>;

    getLastTimeStamp(overrides?: CallOverrides): Promise<[BigNumber]>;

    getNumWords(overrides?: CallOverrides): Promise<[BigNumber]>;

    getPlayer(
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string]>;

    getRaffleState(overrides?: CallOverrides): Promise<[number]>;

    getRecentWinner(overrides?: CallOverrides): Promise<[string]>;

    getRequestConfirmations(overrides?: CallOverrides): Promise<[BigNumber]>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    performUpkeep(
      arg0: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    rawFulfillRandomWords(
      requestId: BigNumberish,
      randomWords: BigNumberish[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  checkUpkeep(
    arg0: BytesLike,
    overrides?: CallOverrides
  ): Promise<[boolean, string] & { upkeepNeeded: boolean }>;

  enterRaffle(
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  getEntranceFee(overrides?: CallOverrides): Promise<BigNumber>;

  getInterval(overrides?: CallOverrides): Promise<BigNumber>;

  getLastTimeStamp(overrides?: CallOverrides): Promise<BigNumber>;

  getNumWords(overrides?: CallOverrides): Promise<BigNumber>;

  getPlayer(index: BigNumberish, overrides?: CallOverrides): Promise<string>;

  getRaffleState(overrides?: CallOverrides): Promise<number>;

  getRecentWinner(overrides?: CallOverrides): Promise<string>;

  getRequestConfirmations(overrides?: CallOverrides): Promise<BigNumber>;

  owner(overrides?: CallOverrides): Promise<string>;

  performUpkeep(
    arg0: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  rawFulfillRandomWords(
    requestId: BigNumberish,
    randomWords: BigNumberish[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  renounceOwnership(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  transferOwnership(
    newOwner: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    checkUpkeep(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<[boolean, string] & { upkeepNeeded: boolean }>;

    enterRaffle(overrides?: CallOverrides): Promise<void>;

    getEntranceFee(overrides?: CallOverrides): Promise<BigNumber>;

    getInterval(overrides?: CallOverrides): Promise<BigNumber>;

    getLastTimeStamp(overrides?: CallOverrides): Promise<BigNumber>;

    getNumWords(overrides?: CallOverrides): Promise<BigNumber>;

    getPlayer(index: BigNumberish, overrides?: CallOverrides): Promise<string>;

    getRaffleState(overrides?: CallOverrides): Promise<number>;

    getRecentWinner(overrides?: CallOverrides): Promise<string>;

    getRequestConfirmations(overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<string>;

    performUpkeep(arg0: BytesLike, overrides?: CallOverrides): Promise<void>;

    rawFulfillRandomWords(
      requestId: BigNumberish,
      randomWords: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<void>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    transferOwnership(
      newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "OwnershipTransferred(address,address)"(
      previousOwner?: string | null,
      newOwner?: string | null
    ): OwnershipTransferredEventFilter;
    OwnershipTransferred(
      previousOwner?: string | null,
      newOwner?: string | null
    ): OwnershipTransferredEventFilter;

    "RaffleEnter(address)"(player?: string | null): RaffleEnterEventFilter;
    RaffleEnter(player?: string | null): RaffleEnterEventFilter;

    "RequestedRaffleWinner(uint256)"(
      requestId?: BigNumberish | null
    ): RequestedRaffleWinnerEventFilter;
    RequestedRaffleWinner(
      requestId?: BigNumberish | null
    ): RequestedRaffleWinnerEventFilter;

    "WinnerPicked(address)"(player?: string | null): WinnerPickedEventFilter;
    WinnerPicked(player?: string | null): WinnerPickedEventFilter;
  };

  estimateGas: {
    checkUpkeep(arg0: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;

    enterRaffle(
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    getEntranceFee(overrides?: CallOverrides): Promise<BigNumber>;

    getInterval(overrides?: CallOverrides): Promise<BigNumber>;

    getLastTimeStamp(overrides?: CallOverrides): Promise<BigNumber>;

    getNumWords(overrides?: CallOverrides): Promise<BigNumber>;

    getPlayer(
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getRaffleState(overrides?: CallOverrides): Promise<BigNumber>;

    getRecentWinner(overrides?: CallOverrides): Promise<BigNumber>;

    getRequestConfirmations(overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    performUpkeep(
      arg0: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    rawFulfillRandomWords(
      requestId: BigNumberish,
      randomWords: BigNumberish[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    checkUpkeep(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    enterRaffle(
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    getEntranceFee(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getInterval(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getLastTimeStamp(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getNumWords(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getPlayer(
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getRaffleState(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getRecentWinner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getRequestConfirmations(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    performUpkeep(
      arg0: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    rawFulfillRandomWords(
      requestId: BigNumberish,
      randomWords: BigNumberish[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
