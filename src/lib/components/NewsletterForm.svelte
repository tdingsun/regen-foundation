<script lang="ts">
	import { enhance } from '$app/forms';

	let { headerText, buttonText, successText } = $props();

	let formSubmitted = $state(false);
</script>

<div class="my-16 flex w-full  justify-center p-8 ">
	<div class="{formSubmitted ? 'hidden' : ''} max-sm:w-full flex flex-col sm:flex-row  gap-x-4 gap-y-2">
		<div class="text-green flex items-center text-lg font-bold">{headerText}</div>
		<div class="flex max-sm:w-full">
			<form
				use:enhance={({ formElement, formData, action, cancel, submitter }) => {
					if (formSubmitted) {
						cancel();
					}
					return async ({ result, update }) => {
						if (result.type === 'success') {
							formSubmitted = true;
							setTimeout(() => {
								formSubmitted = false;
							}, 2000);
						}
						update();
					};
				}}
				method="POST"
				action="?/submitNewsletterForm"
                class="max-sm:w-full"
			>
				<div class="flex gap-4">
					<input
						required={true}
						minlength="1"
						maxlength="99"
						name="email"
						type="email"
						class="border-green flex-grow border px-2 py-1 md:w-60"
						placeholder="Email"
					/>
					<button
						formaction="?/submitNewsletterForm"
						type="submit"
						class="text-green cursor-pointer text-lg font-bold hover:underline">{buttonText}</button
					>
				</div>
			</form>
		</div>
	</div>

	<div class="{formSubmitted ? '' : 'hidden'}  flex justify-center">
		{successText}
	</div>
</div>
