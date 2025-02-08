/* JavaScript File for the FAQ part in main pages */
function initializeFAQ() {
    /* Targets the FAQ container */
    const faqContainer = document.querySelector('.faq-content');
    /* Waits for the user to click the Icon, then changes the icon and shows (or not) the body. */
    faqContainer.addEventListener('click', (e) => {
        /* Gets the Header. */
        const groupHeader = e.target.closest('.faq-group-header');

        if (!groupHeader) return;

        const group = groupHeader.parentElement;
        const groupBody = group.querySelector('.faq-group-body');
        const icon = groupHeader.querySelector('i');

        /* Toggles the Icon. */
        icon.classList.toggle('fa-plus');
        icon.classList.toggle('fa-minus');

        /* Toggles Visibility of the body. */
        groupBody.classList.toggle('open');

        /* Closes other open FAQ bodies. */
        const otherGroups = faqContainer.querySelectorAll('.faq-group');
        otherGroups.forEach((otherGroup) => {
            if (otherGroup !== group) {
                const otherGroupBody = otherGroup.querySelector('.faq-group-body');
                const otherIcon = otherGroup.querySelector('.faq-group-header i');
                otherGroupBody.classList.remove('open');
                otherIcon.classList.remove('fa-minus');
                otherIcon.classList.add('fa-plus');
            }
        })
    });
}
document.addEventListener('DOMContentLoaded', () => {
    initializeFAQ();
});