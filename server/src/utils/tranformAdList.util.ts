import { Ad } from '../ads/entities/ad.entity';

export const tranformAdList = (value: Ad[]) => {
  return value.reduce((adList, ad) => {
    if (!(ad.type in adList)) {
      adList[ad.type] =
        ad.type === 'auction'
          ? []
          : {
              [ad.vehicle.type]: [],
            };
    }

    const objectAlias = adList[ad.type];
    const list =
      ad.type === 'auction' ? objectAlias : objectAlias[ad.vehicle.type];

    list.push(ad);

    return adList;
  }, {});
};
