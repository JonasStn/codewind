-- CreateTable
CREATE TABLE "Article" (
    "id" INT8 NOT NULL DEFAULT unique_rowid(),
    "title" STRING(255) NOT NULL,
    "content" STRING,

    CONSTRAINT "Article_pkey" PRIMARY KEY ("id")
);
