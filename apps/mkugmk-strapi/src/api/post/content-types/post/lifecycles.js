const CyrillicToTranslit = require("cyrillic-to-translit-js");

const cyrillicToTranslit = new CyrillicToTranslit();

module.exports = {
  beforeCreate(event) {
    const { data } = event.params;
    const date = new Date();
    if (data.title) {
      data.slug = cyrillicToTranslit
        .transform(
          `${data.title} ${date.getDate()}-${
            date.getMonth() + 1
          }-${date.getFullYear()}`,
          "-"
        )
        .toLowerCase();
    }
  },
  beforeUpdate(event) {
    const { data } = event.params;
    const date = new Date();
    if (data.title) {
      data.slug = cyrillicToTranslit
        .transform(
          `${data.title} ${date.getDate()}-${
            date.getMonth() + 1
          }-${date.getFullYear()}`,
          "-"
        )
        .toLowerCase();
    }
  },
};
