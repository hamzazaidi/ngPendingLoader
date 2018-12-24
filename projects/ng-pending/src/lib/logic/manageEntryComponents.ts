export const manageEntryComponentsOfModule = (module, component) => {
    module.decorators.forEach(decoratorFactory => {
        decoratorFactory.args.forEach(decorator => {
            if (!decorator.entryComponents.includes(component)) {
                decorator.entryComponents.push(component);
            }
        });
    });
};
