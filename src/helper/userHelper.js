
export function userIncomplete(userActiveState) {
    switch (userActiveState) {
        case 'inComplete':
            return 'incomplete-class';
        case 'inPending':
            return 'pending-class';
        case 'inActive':
            return 'active-class';
        case '-':
        default:
            return 'unknown-class';
    }
}

export function fixLondonDate() {

}