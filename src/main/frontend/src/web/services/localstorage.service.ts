const storageKey = 'mockits';

// Función para obtener la lista de elementos desde el localStorage
const getItemsFromLocalStorage = () => {
    const storedData = localStorage.getItem(storageKey);
    return storedData ? JSON.parse(storedData) : [];
};

// Función para guardar la lista de elementos en el localStorage
const saveItemsToLocalStorage = (items: any[]) => {
    localStorage.setItem(storageKey, JSON.stringify(items));
};

// Función para agregar un nuevo elemento
const addItem = (item: any) => {
    const items = getItemsFromLocalStorage();
    items.push(item);
    saveItemsToLocalStorage(items);
};

// Función para obtener todos los elementos
const getAllItems = () => {
    return getItemsFromLocalStorage();
};

// Función para actualizar un elemento por su ID
const updateItemById = (id: any, updatedData: any) => {
    const items = getItemsFromLocalStorage();
    const index = items.findIndex((item:any) => item.id === id);

    if (index !== -1) {
        items[index] = { ...items[index], ...updatedData };
        saveItemsToLocalStorage(items);
    }
};

// Función para eliminar un elemento por su ID
const deleteItemById = (id:any) => {
    const items = getItemsFromLocalStorage();
    const filteredItems = items.filter((item:any) => item.id !== id);
    saveItemsToLocalStorage(filteredItems);
};

export const LService = {
    getAllItems,
    addItem,
    updateItemById,
    deleteItemById,
    saveItemsToLocalStorage
}