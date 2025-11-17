import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';

@Injectable()
export class PasswordHashService {
  // Hash password before saving to database
  async hashPassword(password: string): Promise<string> {
    const saltRounds = 10; // You can adjust the salt rounds here
    return bcrypt.hash(password, saltRounds);
  }

  // Compare plain password with stored hashed password
  async comparePasswords(
    plainPassword: string,
    hashedPassword: string,
  ): Promise<boolean> {
    // Ensure both arguments are not empty
    if (!plainPassword || !hashedPassword) {
      throw new Error('Both plainPassword and hashedPassword are required');
    }

    return bcrypt.compare(plainPassword, hashedPassword);
  }

  // Test password comparison
  async testPassword() {
    const plainPassword = 'test';
    const storedHash =
      '$2b$10$YyQrSDQ4iNzOD.l.2UTVXe0QVyWTBIFyDcKMmRDnp.g8i95TMEYzG';

    // Compare plain password with the stored hash
    const isPasswordValid = await bcrypt.compare(plainPassword, storedHash);

    console.log('Is password valid?', isPasswordValid);
  }
}

// To test the password comparison manually:
// (async () => {
//   const passwordService = new PasswordHashService();
//   await passwordService.testPassword();
// })();
