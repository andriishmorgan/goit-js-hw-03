function slugify(title) {
    const symbols = title.toLowerCase().split(' ');

    const slug = symbols.join('-');

    return slug

}

console.log(slugify("English for developer"));