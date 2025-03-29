import admin from 'firebase-admin';
import { readFileSync } from 'fs';
import { join } from 'path';

interface GalleryImage {
  id: string;
  title: string;
  description: string;
  image: string;
}

// Get current directory
const currentDir = process.cwd();

// Load service account and gallery data
const serviceAccount = JSON.parse(
  readFileSync(join(currentDir, 'serviceAccountKey.json'), 'utf-8')
);
const galleryData: GalleryImage[] = JSON.parse(
  readFileSync(join(currentDir, 'galleryData.json'), 'utf-8')
);

// Initialize Firebase
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://evelynoweibo-81a0f-default-rtdb.firebaseio.com'
});

const db = admin.database();

async function uploadGallery() {
  try {
    console.log('🚀 Starting gallery upload...');
    const galleryRef = db.ref('galleryImages');
    
    // Clear existing data
    console.log('🧹 Clearing existing gallery data...');
    await galleryRef.remove();
    
    // Upload images with progress tracking
    console.log(`📤 Uploading ${galleryData.length} images...`);
    const batchSize = 5;
    
    for (let i = 0; i < galleryData.length; i += batchSize) {
      const batch = galleryData.slice(i, i + batchSize);
      await Promise.all(
        batch.map(image => {
          return db.ref(`galleryImages/${image.id}`).set({
            title: image.title,
            description: image.description,
            image: image.image
          });
        })
      );
      console.log(`✅ Uploaded ${Math.min(i + batchSize, galleryData.length)}/${galleryData.length}`);
    }
    
    console.log('🎉 All images uploaded successfully!');
  } catch (error) {
    console.error('❌ Upload failed:', error);
  } finally {
    process.exit();
  }
}

uploadGallery();