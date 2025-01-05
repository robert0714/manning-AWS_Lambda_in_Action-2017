console.log('Loading function');

export const handler = async (event) => {
    console.log('Received event:', JSON.stringify(event, null, 2));
    console.log('greet =', event.greet);
    console.log('name =', event.name);

    const greet = event.greet || 'Hello';
    const name = event.name || 'World';
    const greetings = `${greet} ${name}!`;

    console.log(greetings);
    return greetings;
};
