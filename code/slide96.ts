type DeadEndFunction<T> = <T>(t: T) => void;

type Tee = <T>(deadEndFunction: DeadEndFunction<T>) => (oneTrackInput: T) => T;

export const tee: Tee = (deadEndFunction) => (oneTrackInput) => {
  deadEndFunction(oneTrackInput);
  return oneTrackInput;
};
