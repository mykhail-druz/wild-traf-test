'use client'

import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { PageContainer } from '@/components/layout/PageContainer'
import { BackLink } from '@/components/layout/BackLink'
import { FormInput } from '@/components/form/FormInput'
import { FormTextarea } from '@/components/form/FormTextarea'
import { SubmitButton } from '@/components/form/SubmitButton'
import { useForm } from '@/hooks/useForm'
import { createPost } from '@/lib/posts'
import { PostFormData } from '@/types/post'

export default function AddPostPage() {
    const router = useRouter()

    const validateForm = (values: PostFormData): Partial<PostFormData> => {
        const errors: Partial<PostFormData> = {}

        if (!values.title.trim()) {
            errors.title = 'Title is required'
        }

        if (!values.content.trim()) {
            errors.content = 'Content is required'
        }

        return errors
    }

    const handleFormSubmit = async (values: PostFormData): Promise<void> => {
        try {
            const postId = await createPost(values)
            router.push(`/post/${postId}`)
        } catch (error) {
            alert(
                `Failed to create post: ${error instanceof Error ? error.message : 'Unknown error'}`
            )
            throw error // Re-throw to let the form hook handle the error state
        }
    }

    const { values, errors, isSubmitting, handleChange, handleSubmit } =
        useForm<PostFormData>(
            { title: '', content: '' },
            validateForm,
            handleFormSubmit
        )

    return (
        <PageContainer className="max-w-2xl">
            <BackLink href="/" label="← Back to Posts" />

            <div className="bg-white rounded-lg shadow-sm border p-8">
                <h1 className="text-2xl font-bold text-gray-900 mb-6">
                    Create New Post
                </h1>

                <form onSubmit={handleSubmit} className="space-y-6">
                    <FormInput
                        id="title"
                        name="title"
                        label="Title"
                        value={values.title}
                        onChange={handleChange}
                        error={errors.title}
                        placeholder="Enter post title"
                        required
                    />

                    <FormTextarea
                        id="content"
                        name="content"
                        label="Content"
                        value={values.content}
                        onChange={handleChange}
                        error={errors.content}
                        placeholder="Write your post content here..."
                        required
                        rows={10}
                    />

                    <div className="flex gap-4">
                        <SubmitButton
                            label="Create Post"
                            loadingLabel="Creating..."
                            isSubmitting={isSubmitting}
                        />

                        <Link
                            href="/"
                            className="px-6 py-2 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-50 transition-colors"
                        >
                            Cancel
                        </Link>
                    </div>
                </form>
            </div>
        </PageContainer>
    )
}
