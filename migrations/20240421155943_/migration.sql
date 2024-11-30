-- CreateTable
CREATE TABLE `RateBlog` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `id_blog` INTEGER NOT NULL,
    `id_user` INTEGER NOT NULL,
    `rate` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `RateBlog` ADD CONSTRAINT `RateBlog_id_user_fkey` FOREIGN KEY (`id_user`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `RateBlog` ADD CONSTRAINT `RateBlog_id_blog_fkey` FOREIGN KEY (`id_blog`) REFERENCES `Blog`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
