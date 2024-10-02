function getType(type) {
    if (type && type.name) {
        return type.name;
    } else {
        return 'Nessuna categoria';
    }
}

function getTechnology(technologies) {
    if (technologies && technologies.length > 0) {
        return technologies.map(technology => technology.name).join(', ');
    } else {
        return 'Nessuna tecnologia';
    }
}

function formatDate(date){
    return new Date(date).toLocaleDateString();
}

export { getType, getTechnology, formatDate }