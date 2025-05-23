import { UTCDate } from '@date-fns/utc';
import {
	format,
} from 'date-fns';

export const formatDate = (date: string) => {
    return format(new UTCDate(date), "MMMM dd, yyyy")
}