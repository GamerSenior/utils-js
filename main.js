/**
 * Function used to access an object property recursivelly
 * @param obj Object being accessed
 * @param path Array containing the path to the property
 * @returns {*} Returns the property, if it exists
 */
export const accessRecursively = (obj, path) => {
    if (!(path instanceof Array)) throw Error('Variável path não é do tipo array')
    if (!path || !path.length || !obj) {
        return obj
    }
    return accessRecursively(obj[path.shift()], path)
}
