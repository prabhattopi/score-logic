import User from '../models/User';

export const incrementPoints = async (userId: string) => {
    const user = await User.findById(userId);

    if (!user) throw new Error('User not found');

    const random = Math.random();
    let points = 0;
    let prize = 0;

    // Determine rewards based on random value
    if (random <= 0.5) {
        points = 10; // 50% chance
    } else if (random <= 0.75) {
        prize = 1; // 25% chance
    } else {
        points = 1; // Remaining 25% chance
    }


    user.totalPoints += points;
    user.prizes += prize;

    await user.save();

    return { points, prize };
};
