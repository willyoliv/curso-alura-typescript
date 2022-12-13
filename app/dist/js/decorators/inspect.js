export function inspect(target, propertyKey, descriptor) {
    const originalMethod = descriptor.value;
    descriptor.value = function (...args) {
        console.log(`--- Method ${propertyKey}`);
        console.log(`------ Params ${JSON.stringify(args)}`);
        const returnOriginalMethod = originalMethod.apply(this, args);
        console.log(`------ Return ${JSON.stringify(returnOriginalMethod)}`);
        return returnOriginalMethod;
    };
    return descriptor;
}
//# sourceMappingURL=inspect.js.map