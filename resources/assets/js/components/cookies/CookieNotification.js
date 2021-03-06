import Cookies from 'js-cookie';

export default class CookieNotification {
  constructor() {
    this.cookieNotification = document.querySelector('.js-cookie-notification');
    this.cookieNotificationTriggers = document.querySelectorAll('.js-cookie-notification-trigger');
    this.buttonCookieAll = document.querySelector('.js-cookie-all');
    this.buttonCookieCustom = document.querySelector('.js-cookie-custom');
    this.checkboxAnalytics = document.querySelector('.js-cookie__analytics');
    this.checkboxMarketing = document.querySelector('.js-cookie__marketing');
    this.cookieSettings = {};
    this.cookieSettings.analytics = false;
    this.cookieSettings.marketing = false;
    // Set different cookies
    this.cookieVariables = ['analytics', 'marketing'];
    this.checkCookies();
    this.externalTriggers();
    this.triggerGTMEvent();

    const form = document.querySelector('.cookie-notication__form');
    document.querySelectorAll('.js-toggle-cookie-form').forEach(trigger => {
      trigger.addEventListener('click', e => {
        e.preventDefault();
        form.classList.toggle('show');
      });
    });
  }

  checkCookies() {
    this.updatePreferences();
    this.cookieVariables.forEach(variable => {
      if (!Cookies.get(`cookie_settings__${variable}`)) {
        this.showCookieNotification();
      }
    });
  }

  showCookieNotification() {
    this.updateStates();

    this.cookieNotification.classList.remove('hide');
    setTimeout(() => {
      this.cookieNotification.classList.add('active');
    }, 100);

    this.clickEvents();
  }

  updateStates() {
    this.checkboxAnalytics.checked = this.cookieSettings.analytics === 'true';
    this.checkboxMarketing.checked = this.cookieSettings.marketing === 'true';
  }

  clickEvents() {
    this.buttonCookieAll.addEventListener('click', () => {
      this.createCookies({ analytics: true, marketing: true });
    });

    this.buttonCookieCustom.addEventListener('click', () => {
      this.createCookies({
        analytics: this.checkboxAnalytics.checked,
        marketing: this.checkboxMarketing.checked,
      });
    });
  }

  createCookies(...args) {
    // Create cookies
    Object.keys(args[0]).forEach(key => {
      Cookies.set(`cookie_settings__${key}`, `${args[0][key]}`, { expires: 365 });
    });

    this.hideCookieNotification();
    this.updatePreferences();
    this.triggerGTMEvent();
  }

  hideCookieNotification() {
    this.cookieNotification.classList.remove('active');

    setTimeout(() => {
      this.cookieNotification.classList.add('hide');
    }, 400);
  }

  updatePreferences() {
    [...this.cookieVariables].forEach(cookieSetting => {
      this.cookieSettings[cookieSetting] = Cookies.get(`cookie_settings__${cookieSetting}`);
    });
  }

  externalTriggers() {
    [...this.cookieNotificationTriggers].forEach(trigger => {
      trigger.addEventListener('click', e => {
        e.preventDefault();
        this.showCookieNotification();
      });
    });
  }

  triggerGTMEvent() {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: 'cookieNotification',
    });
  }
}
