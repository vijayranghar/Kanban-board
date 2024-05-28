export function getInitials(fullName) {
    let nameParts = fullName.split(" ");
    if (nameParts.length >= 2) {
        let firstNameInitial = nameParts[0].charAt(0);
        let lastNameInitial = nameParts[nameParts.length - 1].charAt(0);
        return firstNameInitial + lastNameInitial;
    } else {
        return nameParts[0].charAt(0);
    }
}
