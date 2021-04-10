import { SnotifyPosition } from 'ng-snotify';

export const environment = {
  production: true,  
  baseUrl : `https://formspree.io/f/xoqyayqz`,

  snotifyConfig : {
    showProgressBar: true,
    position: SnotifyPosition.rightTop,
  },
};
