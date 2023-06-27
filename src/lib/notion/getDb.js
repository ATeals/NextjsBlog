const formatDate = (date) => (typeof date === typeof "" ? date.slice(0, 10) : date.toISOString().slice(0, 10));

export const getDb = async () => {
    const data = await (
        await fetch("https://api.notion.com/v1/databases/16d1ab3326ca4d5a9744798f5cefe5e4/query", {
            method: "POST",
            headers: {
                Authorization: process.env.NOTION_KEY,
                "Notion-Version": "2022-06-28",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                page_size: 100,
                filter: {
                    and: [
                        // {
                        //     property: "name",
                        //     rich_text: {
                        //         contains: "테스트",
                        //     },
                        // },
                        {
                            property: "공개",
                            checkbox: {
                                equals: true,
                            },
                        },
                        {
                            timestamp: "created_time",
                            created_time: {
                                on_or_after: formatDate(new Date()),
                            },
                        },
                    ],
                },
            }),
            next: { revalidate: 600 },
        })
    ).json();
    return data.results;
};
