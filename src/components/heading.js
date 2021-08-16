export function createHeading() {
    const heading = document.createElement('h2');
    heading.innerText = 'Add Task';
    heading.classList.add('p-16');
    return heading;
}