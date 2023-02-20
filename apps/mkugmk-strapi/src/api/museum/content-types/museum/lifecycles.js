const CyrillicToTranslit = require("cyrillic-to-translit-js");

const cyrillicToTranslit = new CyrillicToTranslit();

module.exports = {
  beforeCreate(event) {
    const { data } = event.params;
    if (data.title) {
      data.slug = cyrillicToTranslit.transform(data.title, "-").toLowerCase();
    }
  },
  beforeUpdate(event) {
    const { data } = event.params;
    if (data.title) {
      data.slug = cyrillicToTranslit.transform(data.title, "-").toLowerCase();
    }
  },
};
