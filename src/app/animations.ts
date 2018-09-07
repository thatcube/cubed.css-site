import {
    trigger,
    animate,
    transition,
    style,
    query
} from '@angular/animations';

export const docsAnimation = trigger('fadeAnimation', [
    transition('* => *', [
        query(':enter, :leave', style({ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 })
            , { optional: true }),
        query(
            ':enter',
            [style({ opacity: 0 })],
            { optional: true }
        ),
        query(
            ':leave',
            [style({ opacity: 1 }), animate('0.2s', style({ opacity: 0, transform: 'translateY(1rem)' }))],
            { optional: true }
        ),
        query(
            ':enter',
            [style({ opacity: 0 }), animate('0.2s', style({ opacity: 1, transform: 'translateY(0)' }))],
            { optional: true }
        )
    ])
]);