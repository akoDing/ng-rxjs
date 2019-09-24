import { Directive, Input, HostBinding } from '@angular/core';

@Directive({
    selector: '[appAvatar]'
})
export class AvatarDirective {
    @Input()
    @HostBinding('style.width')
    @HostBinding('style.height')
    avatarSize = '1.5rem';

    @HostBinding('style.border-width')
    borderWidth = '1px';
    @HostBinding('style.border-style')
    borderStyle = 'solid';
    @HostBinding('style.border-color')
    borderColor = 'rgb(255, 255, 255)';
    @HostBinding('style.border-radius')
    radius = '50%';
    @HostBinding('style.object-fit')
    fitMode = 'cover';
}
