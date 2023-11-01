import { createViewModel } from './main-view-model';

export function submitForm(args){
    const page=args.object.page;

    let name = page.getViewById('name').text;
    let lastmane = page.getViewById('lastName').text; 
    let phoneNumber = page.getViewById('phoneNumber').text;
    let email = page.getViewById('email').text;
    let message = page.getViewById('message').text;


}