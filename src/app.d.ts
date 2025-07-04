// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
import { Database } from './database.types';
import { Resend } from 'resend'
declare global {
	namespace App {
		// interface Error {}
		interface Locals {

// aa

	
			supabase: SupabaseClient<Database>;
			leaderboardClient: SupabaseClient<Database>;
			getSession(): Promise<Session | null>;
			user: any;
			session: any;
			resend: Resend
		}
		interface PageData {
			supabase: SupabaseClient<Database>;
			session: Session | null;
			// plans: any;
			discount: {
				id: string;
				type: 'month' | 'year';
				name: string;
				percent_off: number;
			};
			fivem: any;
		}
		// interface Platform {}
		interface Subscription {
			current_period_end: number | Date;
			current_period_start: number;
			cancel_at: number | Date;
			status: string;
			product: string;
			price_id: string;
			product_id: string;
			customer_portal_url: string;
			should_run: boolean;
			level: null | number;
			type: null | string;
		}
	}
}

export { };
