import { fail } from '@sveltejs/kit';
import { MAILERLITE_API } from '$env/static/private'

export const actions = {
    submitNewsletterForm: async ({ cookies, request }) => {
        const data = await request.formData();
        if (request.method === "POST") {
            const email = data.get('email');

            const options = {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                    Authorization: `Bearer ${MAILERLITE_API}`
                },
                body: JSON.stringify({
                    email
                })
            }

            try {
                const response = await fetch("https://connect.mailerlite.com/api/subscribers", options)

                const data = await response.json();
                console.log(data);
                return data;
            } catch (error: any) {
                console.error(error);
                const errorMessage = error?.message ? error.message : 'error occurred when submitting newsletter form';
                return fail(422, {error: errorMessage})
            }
        } else {
            return fail(405, {data, error: "Method not allowed"})
        }
    }
}