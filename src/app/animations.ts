import {
    trigger,
    animate,
    transition,
    style,
    query
} from '@angular/animations';

export const fadeAnimation = trigger('fadeAnimation', [
    transition('* => *', [
        query(':enter, :leave', style({ position: 'fixed', right: 0, left: 0, width: "100%" })
            , { optional: true }),
        query(
            ':enter',
            [style({ opacity: 0 })],
            { optional: true }
        ),
        query(
            ':leave',
            [style({ opacity: 1 }), animate('0.2s', style({ opacity: 0 }))],
            { optional: true }
        ),
        query(
            ':enter',
            [style({ opacity: 0 }), animate('0.2s', style({ opacity: 1 }))],
            { optional: true }
        )
    ])
]);

export const docsAnimation = trigger('fadeAnimation', [
    transition('* => *', [
        query(':enter, :leave', style({ position: 'absolute'})
            , { optional: true }),
        query(
            ':enter',
            [style({ opacity: 0 })],
            { optional: true }
        ),
        query(
            ':leave',
            [style({ opacity: 1 }), animate('0.2s', style({ opacity: 0 }))],
            { optional: true }
        ),
        query(
            ':enter',
            [style({ opacity: 0 }), animate('0.2s', style({ opacity: 1 }))],
            { optional: true }
        )
    ])
]);