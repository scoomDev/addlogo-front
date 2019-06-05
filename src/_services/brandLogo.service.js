import { Api }  from "../api";

function getAll()
{
    return Api()
        .get('/brand_logos')
        .then( brandLogos => brandLogos.data)
        .catch(error => error)
}

export const brandLogoService = {
    getAll,
};
