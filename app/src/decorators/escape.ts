export function escape(
  target: any,
  propertyKey: string,
  descriptor: PropertyDescriptor
) {
  const originalMethod = descriptor.value;
  descriptor.value = function (...args: any[]) {
    let returnOriginalMethod = originalMethod.apply(this, args);
    if (typeof returnOriginalMethod === 'string') {
      returnOriginalMethod = returnOriginalMethod
        .replace(/<script>[\s\S]*?<\/script>/, '');
    }
    return returnOriginalMethod;
  }

  return descriptor;
}