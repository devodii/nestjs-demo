import { Module } from '@nestjs/common';
import { StripeController } from './stripe.controller';
import { StripeService } from './stripe.service';

const stripeApiKey = 'your_stripe_key_here';

@Module({
  controllers: [StripeController],
  providers: [
    StripeService,
    { provide: 'STRIPE_API_KEY', useValue: stripeApiKey },
  ],
})
export class StripeModule {}
