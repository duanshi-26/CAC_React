// step-1 element ko define kardo object ke form mein
// type, props, children

const reactElement={
    type: 'a',
    props: {
        href: 'https://www.google.com',
        target: '_blank'
    },
    children: "Duanshi JPMC's custom react"
}

// step-2 function banao jo element ko render karega
// function do cheezein lega ek element aur dusra container
// element ko container mein render karega
function render(reactElement,container){
    // dom mein element ko create karo using document.createElement(element ka type), then set its attributes using document.setAttribute() then append using document.appendChild
    const domElement = document.createElement(reactElement.type);
    domElement.innerHTML=reactElement.children;
    for(prop in reactElement.props)
    {
        domElement.setAttribute(prop, reactElement.props[prop]);
    }
    // ab finally append child kardo
    container.appendChild(domElement);
    
}

render(reactElement, document.getElementById('root'));