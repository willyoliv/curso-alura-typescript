export interface Comparable<T> {
  isEquals(objectToComparable: T): boolean;
}