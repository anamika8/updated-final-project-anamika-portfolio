const tabs = document.querySelectorAll('.tab');

/**
 * Opens a tab if not already open.
 * If tab is already open, then closes it
 * @param {*} tab 
 */
const openTab = tab => {
    const content = tab.childNodes[3];
    // if height is not 0px then tab is opened already
    if (content.style.height != '0px' && content.style.height != '') {
        content.style.height = 0;
    } else {
        const contentHeight = content.scrollHeight;
        content.style.height = contentHeight + 'px';
    }
};

const closeOthersTabs = (tabs, openTab) => {
    tabs.forEach(tab => {
        if (tab !== openTab) {
            const content = tab.childNodes[3];
            content.style.height = 0;
            const tabHeading = $(tab).children();
            const idd = $(tabHeading).attr('id');
            if ($(tabHeading).hasClass('active')) {
                $(this).toggleClass('active');
                $(tabHeading).parent().find('.arrow').toggleClass('arrow-animate');
            }

        }
    });
};

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        openTab(tab);
        closeOthersTabs(tabs, tab);
    });
});

$('.tab-heading').click(function() {
    $(this).toggleClass('active');
    $(this).parent().find('.arrow').toggleClass('arrow-animate');
});