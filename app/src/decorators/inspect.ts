
export function inspect(
  target: any,
  propertyKey: string,
  descriptor: PropertyDescriptor
) {
  const originalMethod = descriptor.value;
  descriptor.value = function (...args: any[]) {
    console.log(`--- Method ${propertyKey}`);
    console.log(`------ Params ${JSON.stringify(args)}`);

    const returnOriginalMethod = originalMethod.apply(this, args);

    console.log(`------ Return ${JSON.stringify(returnOriginalMethod)}`);

    return returnOriginalMethod;
  }

  return descriptor;
}
