import { Ad } from '../ads/entities/ad.entity';

export const tranformAdList = (value: Ad[]) => {
  return value.reduce((adList, ad) => {
    let list;

    if (!(ad.type in adList)) {
      adList[ad.type] = ad.type === 'auction' ? [] : {};
    }

    list = adList[ad.type];

    if (ad.type === 'auction') {
      list.push(ad);
      return adList;
    }

    if (!(ad.vehicle.type in list)) {
      list[ad.vehicle.type] = [];
    }

    list = list[ad.vehicle.type];

    list.push(ad);

    return adList;
  }, {});
};
