import mongoose from 'mongoose';

const AnnouncementSchema = new mongoose.Schema({
    name: {
        type: String,
    },
});

const Announcement = mongoose.model('announcement', AnnouncementSchema);

export default Announcement;
