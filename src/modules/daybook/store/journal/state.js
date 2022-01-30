export default () => ({
	isLoading: true,
	entries: [
		{
			id: new Date().getTime(),
			date: new Date().toDateString(),
			text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, sunt architecto voluptatum beatae eum quaerat consequuntur mollitia non commodi possimus ab molestiae sapiente quidem error soluta ea voluptas corporis. Doloremque.',
			picture: null,
		},
		{
			id: new Date().getTime() + 1000,
			date: new Date().toDateString(),
			text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, sunt architecto voluptatum beatae eum quaerat consequuntur mollitia non commodi possimus ab molestiae sapiente quidem error soluta ea voluptas corporis. Doloremque.',
			picture: null,
		},
		{
			id: new Date().getTime() + 2000,
			date: new Date().toDateString(),
			text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, sunt architecto voluptatum beatae eum quaerat consequuntur mollitia non commodi possimus ab molestiae sapiente quidem error soluta ea voluptas corporis. Doloremque.',
			picture: null,
		},
	]
})

