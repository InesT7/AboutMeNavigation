import { createViewModel } from './main-view-model';

export function onNavigatingTo(args) {
  const page = args.object;
  page.bindingContext = createViewModel();
}

export function goAboutMe(args) {
  const button = args.object;
  const page = button.page;
  page.frame.navigate('about-me-page');
}

export function goToHome(args) {
  const button = args.object;
  const page = button.page;
  page.frame.navigate('main-page');
}

export function goToSkills(args) {
  const button = args.object;
  const page = button.page;
  page.frame.navigate('skills-page');
}

export function goToContactMe(args) {
  const button = args.object;
  const page = button.page;
  page.frame.navigate('contact-me-page');
}
