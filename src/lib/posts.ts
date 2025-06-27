import {
    collection,
    addDoc,
    getDocs,
    doc,
    getDoc,
    orderBy,
    query,
    Timestamp
} from 'firebase/firestore';
import { db } from './firebase';
import { Post, PostFormData } from '@/types/post';

const POSTS_COLLECTION = 'posts';

export async function createPost(postData: PostFormData): Promise<string> {
    try {
        const docRef = await addDoc(collection(db, POSTS_COLLECTION), {
            ...postData,
            createdAt: Timestamp.now()
        });
        return docRef.id;
    } catch (error) {
        throw error;
    }
}

export async function getAllPosts(): Promise<Post[]> {
    try {
        const q = query(
            collection(db, POSTS_COLLECTION),
            orderBy('createdAt', 'desc')
        );
        const querySnapshot = await getDocs(q);

        const posts = querySnapshot.docs.map(doc => {
            const data = doc.data();
            return {
                id: doc.id,
                title: data.title,
                content: data.content,
                createdAt: data.createdAt.toDate()
            };
        });

        return posts;
    } catch (error) {
        throw error;
    }
}

export async function getPostById(id: string): Promise<Post | null> {
    try {
        const docRef = doc(db, POSTS_COLLECTION, id);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            const data = docSnap.data();
            return {
                id: docSnap.id,
                title: data.title,
                content: data.content,
                createdAt: data.createdAt.toDate()
            };
        }

        return null;
    } catch (error) {
        throw error;
    }
}
